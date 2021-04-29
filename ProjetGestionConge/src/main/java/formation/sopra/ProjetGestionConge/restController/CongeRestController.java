package formation.sopra.ProjetGestionConge.restController;

import java.lang.reflect.Field;
import java.net.URI;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.management.RuntimeErrorException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ReflectionUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.annotation.JsonView;

import formation.sopra.ProjetGestionConge.entities.Conge;
import formation.sopra.ProjetGestionConge.entities.StatutDemande;
import formation.sopra.ProjetGestionConge.entities.Utilisateur;

import formation.sopra.ProjetGestionConge.repositories.CongeRepository;
import formation.sopra.ProjetGestionConge.repositories.UtilisateurRepository;




@RestController
@RequestMapping("/api/conge")
@CrossOrigin(origins = "*")
public class CongeRestController {



	@Autowired
	private CongeRepository congeRepository;
	@Autowired
	private UtilisateurRepository utilisateurRepository;


	// all conges
	@GetMapping("")
	@JsonView(Views.Common.class)
	public List<Conge> getAllConge() {
		return congeRepository.findAll();
	}

	// findById
	@GetMapping("/{id}")
	@JsonView(Views.Common.class)
	public Conge getById(@PathVariable("id") Integer id) {
		Optional<Conge> opt = congeRepository.findById(id);
		if (!opt.isPresent()) {
			throw new RuntimeException();
		}
		return opt.get();

	}
	// findByDemandeur	
	@GetMapping("/{id}/demandeur")
	@JsonView(Views.Common.class)
	public List<Conge> getCongeByDemandeur(@PathVariable("id") Integer id) {
		return congeRepository.findByDemandeur(id);
	}
	@GetMapping("/{id}/manager")
	@JsonView(Views.Common.class)
	public List<Conge> getCongeByManager(@PathVariable("id") Integer id) {
		return congeRepository.findByManager(id);
	}

	@GetMapping("/{dateDebut}/{dateFin}")
	@JsonView(Views.Common.class)
	public List<Conge> getCongeEntreDeuxDates(@PathVariable("dateDebut") String dateDebut, @PathVariable("dateFin") String dateFin) {
		return congeRepository.getCongeEntreDeuxDates(LocalDate.parse(dateDebut), LocalDate.parse(dateFin));
	}
	@GetMapping("/{id}/{dateDebut}/{dateFin}/manager")
	@JsonView(Views.Common.class)
	public List<Conge> getCongeEntreDeuxDatesByManager(@PathVariable("id") Integer id, @PathVariable("dateDebut") String dateDebut, @PathVariable("dateFin") String dateFin) {
		return congeRepository.getCongeEntreDeuxDatesByManager(id, LocalDate.parse(dateDebut), LocalDate.parse(dateFin));
	}
	
	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	@JsonView(Views.Common.class)
	//@Valid
	public Conge postConge( @RequestBody Conge conge, BindingResult br) {
		if (br.hasErrors()) {
			throw new RuntimeException();
		}
		return congeRepository.save(conge);
	}

	//update
	@PatchMapping("/{id}")
	@JsonView(Views.Common.class)
	public Conge patchConge(@RequestBody Map<String, Object> fields, @PathVariable("id") Integer id) {
		Optional<Conge> opt = congeRepository.findById(id);
		if (opt.isPresent()) {
			Conge conge = opt.get();
			fields.forEach((key, value) -> {
				Field field = ReflectionUtils.findField(Conge.class, key);
				ReflectionUtils.makeAccessible(field);
				ReflectionUtils.setField(field, conge, value);
			});
			return congeRepository.save(conge);
		}
		throw new RuntimeException();
	}
	
	@PutMapping("/{id}")
	@JsonView(Views.Common.class)
	public Conge update(@Valid @RequestBody Conge conge, BindingResult br, @PathVariable("id") Integer id) {
		Optional<Conge> opt = congeRepository.findById(id);
		if (opt.isPresent()) {
			Conge formationEnBase = opt.get();
			conge.setVersion(formationEnBase.getVersion());
			conge.setId(id);
			conge.setStatutDemande(conge.getStatutDemande());
			return congeRepository.save(conge);
		}
		throw new RuntimeException();
	}
	// delete

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable("id") Integer id) {
		Optional<Conge> opt = congeRepository.findById(id);
		if (opt.isPresent()) {
			congeRepository.deleteById(id);
		} else {
			throw new RuntimeException();
		}
	}
	

}

