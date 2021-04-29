package formation.sopra.ProjetGestionConge.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import formation.sopra.ProjetGestionConge.entities.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer>{

	Optional<Utilisateur> findByMail(String mail);
}
