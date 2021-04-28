package formation.sopra.ProjetGestionConge.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import formation.sopra.ProjetGestionConge.entities.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer>{

}
