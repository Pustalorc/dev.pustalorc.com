using System.Collections.Generic;

namespace nuelranks.pustalorc.xyz.JSON_Classes
{
    public class SimpleTeam
    {
        public string Id;
        public string Name;
        public List<SimplePlayer> Members;

        public SimpleTeam()
        {
            Id = "";
            Name = "";
            Members = new List<SimplePlayer>();
        }
    }
}