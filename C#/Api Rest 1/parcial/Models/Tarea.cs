namespace Parcial.Models
{
   public enum EstadoTarea
    {
        Pendiente,
        EnProgreso,
        Completada
    }
    
    public class Tarea
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descripcion { get; set; }
        public EstadoTarea Estado { get; set; }


    }
}