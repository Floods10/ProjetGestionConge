package formation.sopra.ProjetGestionConge.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import formation.sopra.ProjetGestionConge.entities.Conge;


public interface CongeRepository extends JpaRepository<Conge, Integer>{

}
