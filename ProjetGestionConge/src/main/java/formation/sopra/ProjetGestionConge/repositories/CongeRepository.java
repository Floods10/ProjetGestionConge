package formation.sopra.ProjetGestionConge.repositories;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import formation.sopra.ProjetGestionConge.entities.Conge;


public interface CongeRepository extends JpaRepository<Conge, Integer>{
	
@Query()
	Optional<Conge> getCongeEntreDeuxDates(LocalDate parse, LocalDate parse2);

}
