package formation.sopra.ProjetGestionConge.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import formation.sopra.ProjetGestionConge.entities.Conge;



public interface CongeRepository extends JpaRepository<Conge, Integer>{
	
	
@Query("select c from Conge c where (c.dateDebut BETWEEN :dateDebut AND :dateFin)")
public List<Conge> getCongeEntreDeuxDates(LocalDate dateDebut, LocalDate dateFin);

@Query("select c from Conge c where c.demandeur.id=:id")
public List<Conge> findByDemandeur(@Param("id") Integer id);

@Query("select c from Conge c where c.demandeur.manager.id=:id")
public List<Conge> findByManager(@Param("id") Integer id);

@Query("select c from Conge c where c.demandeur.manager.id=:id and (c.dateDebut BETWEEN :dateDebut AND :dateFin)")
public List<Conge> getCongeEntreDeuxDatesByManager(@Param("id") Integer id, LocalDate dateDebut, LocalDate dateFin);

}
