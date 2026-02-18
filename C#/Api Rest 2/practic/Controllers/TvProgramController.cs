using Microsoft.AspNetCore.Mvc;

namespace practic.Controllers;

using Microsoft.AspNetCore.Http.HttpResults;
using practic.Models;
using practic.Repositories;

[ApiController]
[Route("[controller]")]
public class TvProgramController : ControllerBase
{
    private readonly AccesoADatos acceso;
    private List<TvProgram> programas;

    public TvProgramController()
    {
        acceso = new AccesoADatos();
        programas = acceso.Obetener();
    }


    private string validaciones(TvProgram programa,int? idExcluir = null)
    {

        int aux = 0;
        string respuesta = "Erorres:";

        if (programa == null)
        {
            aux++;
            respuesta += " Debes llenar los campos ";
        }


        if (programa.Title.Length < 1 || programa.Title.Length > 100)
        {
            aux++;
            respuesta += " El titulo es obligatorio y tiene un maximo de 100 caracteres ";

        }


        if (programa.Genre.Length < 1 || programa.Genre.Length > 50)
        {
            aux++;
            respuesta += " El genero es obligatorio y tiene un maximo de 50 caracteres ";
        }

        if (programa.StartTime < 6 || programa.StartTime > 23.5)
        {
            aux++;
            respuesta += " La hora de inicializacion no existe ";
        }

        if (programa.HoraDeFinalizacion() > 24)
        {
            aux++;
            respuesta += " La hora de finalizacion no puede ser mayor que las 23:59";
        }

        if (programa.DurationMinutes != 30 && programa.DurationMinutes != 60 && programa.DurationMinutes != 120)
        {
            aux++;
            respuesta += " La duracion son 30, 60 o 120 minutos ";
        }


        var progDiaIgual = programas.Where(p => p.DiaDeLaSemana == programa.DiaDeLaSemana && 
        p.Id != idExcluir).ToList();


        double finNuevoPrograma = programa.HoraDeFinalizacion();

        bool hayConflicto = progDiaIgual.Any(pExistente =>
            pExistente.StartTime < finNuevoPrograma &&
            pExistente.HoraDeFinalizacion() > programa.StartTime
        );

        if (hayConflicto)
        {
            aux++;
            respuesta += " El horario entra en conflicto con otro programa existente ";
        }




        if (aux == 0)
        {
            return "sin errores";
        }
        else
        {
            return respuesta;
        }
    }


    [HttpGet("Programas")]
    public ActionResult<List<TvProgram>> GetProgramas()
    {

        if (programas == null || programas.Count == 0)
        {
            return NotFound("No se encontraron programas de TV.");
        }

        return Ok(programas);

    }

    [HttpPost("CrearPrograma")]

    public IActionResult CrearPrograma([FromBody] TvProgram programa)
    {

        /* if (programa == null)
         {
             return BadRequest("Debes llenar los campos");
         }

        

         if (programa.Title.Length < 1 || programa.Title.Length > 100)
         {
             return BadRequest("El titulo es obligatorio y tiene un maximo de 100 caracteres");
         }

         if (programa.Genre.Length < 1 || programa.Genre.Length > 50)
         {
             return BadRequest("El genero es obligatorio y tiene un maximo de 50 caracteres");
         }

         if (programa.DurationMinutes != 30 && programa.DurationMinutes != 60 && programa.DurationMinutes != 120)
         {
             return BadRequest("La duracion son 30, 60 o 120 minutos");
         }



         var progDiaIgual = programas.Where(p => p.DiaDeLaSemana == programa.DiaDeLaSemana).ToList();


         double finNuevoPrograma = programa.HoraDeFinalizacion();

         bool hayConflicto = progDiaIgual.Any(pExistente =>
             pExistente.StartTime < finNuevoPrograma &&
             pExistente.HoraDeFinalizacion() > programa.StartTime
         );

         if (hayConflicto)
         {
             return BadRequest("El horario entra en conflicto con otro programa existente.");
         }

     // agregar validacion de 24 horas y que si se pasa de cierto tiempo, termina el dia siguiente

     // poner todo dentro de una ffuncnion

     */


        if (programas.Any(p => p.Id == programa.Id))
        {
            return NotFound("El programa ya existe");
        }
        if (validaciones(programa) == "sin errores")
        {
            programas.Add(programa);
            acceso.Guardar(programas);

            return Ok("Programa Creado");
        }
        else
        {
            return BadRequest("No se ha podido crear el programa");
        }

    }


    [HttpPut("ModificarPrograma/{Id}")]

    public IActionResult ModificarPrograma([FromRoute] int Id, [FromBody] TvProgram programa)
    {
        if (!programas.Any(p => p.Id == Id))
        {
            return NotFound("El programa no existe");
        }

        if (programa.Id != Id)
        {
            
            return BadRequest("Los campos id deben coincidir");
        }



        var aux=validaciones(programa,idExcluir: Id);


        if ( aux == "sin errores")
        {

            var programaViejo = programas.FirstOrDefault(p => p.Id == Id);
            programas.Remove(programaViejo);
            programas.Add(programa);
            acceso.Guardar(programas);
            return Ok("Modificacion realizada");


        }
        else
        {
            return BadRequest($"No se actualizo el programa ya que falta {aux} ");
        }










    }

    [HttpDelete("BorrarPrograma/{Id}")]

    public IActionResult BorrarPrograma([FromRoute] int Id)
    {
        if (!programas.Any(p => p.Id == Id))
        {
            return NotFound("El programa no existe");
        }

        var programaViejo = programas.FirstOrDefault(p => p.Id == Id);

        programas.Remove(programaViejo);
        acceso.Guardar(programas);

        return Ok("programa borrado");


    }



    [HttpGet("ProgramasPorDia/{Day}")]
    public ActionResult<List<TvProgram>> GetProgramasPorDia(Dia Day)
    {

        var progDiaIgual = programas.Where(p => p.DiaDeLaSemana == Day).ToList();

        if (progDiaIgual == null || progDiaIgual.Count == 0)
        {
            return NotFound("No se encontraron programas de TV de ese dia.");
        }

        return Ok(progDiaIgual);

    }
}