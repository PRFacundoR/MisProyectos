using Microsoft.AspNetCore.Mvc;
using Parcial.Models;
using Parcial.Repositories;

namespace Parcial.Controllers;

[ApiController]
[Route("[controller]")]
public class TareaController : ControllerBase
{
    private readonly TareaRepository TareaRepo;

    private readonly List<Tarea> Tareas;

    public TareaController()
    {
        TareaRepo = new TareaRepository();
        Tareas = TareaRepo.ObetenerTareas();
    }

    [HttpPost("CrearTarea")]
    public IActionResult CrearTarea([FromBody] Tarea tarea)
    {
        if(string.IsNullOrEmpty(tarea.Titulo) || string.IsNullOrEmpty(tarea.Descripcion))
        {
            return BadRequest("El título y la descripción son obligatorios");
        }

        if (tarea.Estado != EstadoTarea.Pendiente)
        {
            return BadRequest("El estado inicial de la tarea debe ser 'Pendiente'");
        }
        
        if (Tareas.Any(t => t.Id == tarea.Id))
        {
            return BadRequest("Ya existe una tarea con el mismo ID");
        }

        Tareas.Add(tarea);
        TareaRepo.Guardar(Tareas);
        return Ok("Tarea creada exitosamente");
    }

    [HttpGet("ObtenerTareaPorId/{id}")]
    public ActionResult<Tarea> ObtenerTareaPorId([FromRoute] int id)
    {
        var tarea = Tareas.FirstOrDefault(t => t.Id == id);
        if (tarea == null)
        {
            return NotFound("Tarea no encontrada");
        }
        return Ok(tarea);
    }


    [HttpPut("ActualizarEstadoTarea/{id}")]
    public IActionResult ActualizarEstadoTarea([FromRoute] int id, [FromBody] int Estado)
    {
        EstadoTarea nuevoEstado;
        switch(Estado)
        {
            case 0:
                nuevoEstado=EstadoTarea.Pendiente;
                break;
            case 1:
                nuevoEstado=EstadoTarea.EnProgreso;
                break;
            case 2:
                nuevoEstado=EstadoTarea.Completada;
                break;
            default:
                return BadRequest("Estado no válido. Los valores permitidos son: 0 (Pendiente), 1 (EnProgreso), 2 (Completada)");
        }
        var tarea = Tareas.FirstOrDefault(t => t.Id == id);
        if (tarea == null)
        {
            return NotFound("Tarea no encontrada");
        }

        if (nuevoEstado != EstadoTarea.EnProgreso && nuevoEstado != EstadoTarea.Completada)
        {
            return BadRequest("El estado de la tarea debe ser EnProgreso o Completada");
        }

        Tareas.Remove(tarea);
        Tareas.Add(new Tarea
        {
            Id = tarea.Id,
            Titulo = tarea.Titulo,
            Descripcion = tarea.Descripcion,
            Estado = nuevoEstado
        });

        TareaRepo.Guardar(Tareas);
        return Ok("Estado de la tarea actualizado exitosamente");
    }

    [HttpGet("ObtenerTareas")]

    public ActionResult<List<Tarea>> ObtenerTareas()
    {   if (Tareas.Count == 0)
        {
            return NotFound("No hay tareas disponibles");
        }

        return Ok(Tareas);
    }

    [HttpDelete("EliminarTarea/{id}")]
    public IActionResult EliminarTarea([FromRoute] int id)
    {
        var tarea = Tareas.FirstOrDefault(t => t.Id == id);
        if (tarea == null)
        {
            return NotFound("Tarea no encontrada");
        }

        Tareas.Remove(tarea);
        TareaRepo.Guardar(Tareas);
        return Ok("Tarea eliminada exitosamente");
    }   

    [HttpGet("ObtenerTareasPorEstado/{estado}")]
    public ActionResult<List<Tarea>> ObtenerTareasPorEstado([FromRoute] EstadoTarea estado)
    {
        var tareasFiltradas = Tareas.Where(t => t.Estado == estado).ToList();
        if (tareasFiltradas.Count == 0)
        {
            return NotFound("No hay tareas con el estado especificado");
        }
        return Ok(tareasFiltradas);
    }





}