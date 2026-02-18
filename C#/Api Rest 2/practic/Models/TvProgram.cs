namespace practic.Models;


public enum Dia
{
    Lunes = 0,
    Martes = 1,
    Miercoles = 2,
    Jueves = 3,
    Viernes = 4,
    Sabado = 5,
    Domingo = 6
}




public class TvProgram
{
    public int Id { get; set; }
    public string Title { get; set; }

    public string Genre { get; set; }

    public Dia DiaDeLaSemana { get; set; }

    public double StartTime { get; set; }

    public double DurationMinutes { get; set; }


    public double HoraDeFinalizacion()
    {
        
       

        return StartTime+(DurationMinutes / 60.0);
    }


}