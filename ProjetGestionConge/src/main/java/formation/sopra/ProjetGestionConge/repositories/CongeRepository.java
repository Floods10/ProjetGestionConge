package formation.sopra.ProjetGestionConge.repositories;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import formation.sopra.ProjetGestionConge.entities.Conge;



public interface CongeRepository extends JpaRepository<Conge, Integer>{
	

@Query("select c from Conge c where c.dateDebut>:dateDebut and c.dateFin<:dateFin"  )
public Optional<Conge> getCongeEntreDeuxDates(LocalDate dateDebut, LocalDate dateFin);

}
