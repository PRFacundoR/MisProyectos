namespace practic.Repositories;

using System.Text.Json;
using System.Text.Json.Serialization;
using practic.Models;


class AccesoADatos
{

    public List<TvProgram> Obetener()
    {

        if (!Directory.Exists("DB"))
        {
            Directory.CreateDirectory("DB");
        }

        if (!File.Exists("DB\\data.json"))
        {
            File.WriteAllText("DB\\data.json", "[]");
        }

        string json = File.ReadAllText("DB\\data.json");

        var options = new JsonSerializerOptions
        {
            // Agrega el convertidor de String a Enum
            Converters = { new JsonStringEnumConverter()
            //new CustomDateTimeConverter()   // <--- EL NUEVO PARA LA FECHA 
            },
            // Opcional: Ayuda si tus propiedades "Title" vinieran como "title" en el JSON
            //PropertyNameCaseInsensitive = true
            /*Recomendación: Agrega esto para que no importen las mayúsculas/minúsculas
            PropertyNameCaseInsensitive = true*/

        };

        List<TvProgram> data = JsonSerializer.Deserialize<List<TvProgram>>(json, options);
        return data;
    }


    public void Guardar(List<TvProgram> Programa)
    {
        var options = new JsonSerializerOptions
        {
            WriteIndented = true, // Esto hace que el JSON sea legible (con espacios y saltos)
            Converters = { new JsonStringEnumConverter() } // ¡Importante repetir esto!
        };
        string json = JsonSerializer.Serialize(Programa, options);

        File.WriteAllText("DB\\data.json", json);
    }

}