package formation.sopra.ProjetGestionConge.repositories;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import formation.sopra.ProjetGestionConge.entities.Conge;



public interface CongeRepository extends JpaRepository<Conge, Integer>{
	
	
@Query("select c from Conge c where (c.dateDebut BETWEEN :dateDebut AND :dateFin)")
public Optional<Conge> getCongeEntreDeuxDates(LocalDate dateDebut, LocalDate dateFin);

@Query("select c from Conge c where c.demandeur.id=:id")
public List<Conge> findByDemandeur(@Param("id") Integer id);

}
