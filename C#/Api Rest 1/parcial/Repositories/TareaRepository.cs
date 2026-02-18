namespace Parcial.Repositories;

using Parcial.Models;
using System.Text.Json;


public class TareaRepository
{

    public List<Tarea> ObetenerTareas()
    {

        if (!Directory.Exists("DB"))
        {
            Directory.CreateDirectory("DB");
        }

        if (!File.Exists("DB\\tareas.json"))
        {
            File.WriteAllText("DB\\tareas.json", "[]"); // crea un JSON válido vacío
        }

        string json = File.ReadAllText("DB\\tareas.json");
        List<Tarea> tareas = JsonSerializer.Deserialize<List<Tarea>>(json);
        return tareas;
    }


    public void Guardar(List<Tarea> Tarea)
    {

        string json = JsonSerializer.Serialize(Tarea);
        File.WriteAllText("DB\\tareas.json", json);
    }



}
