package formation.sopra.ProjetGestionConge.restController;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import formation.sopra.ProjetGestionConge.entities.Utilisateur;
import formation.sopra.ProjetGestionConge.repositories.UtilisateurRepository;

@RestController
@RequestMapping("/api/utilisateur")
@CrossOrigin(origins = "*")
public class UtilisateurRestController {
	
	@Autowired
	private UtilisateurRepository utilisateurRepository;

	@ResponseStatus(HttpStatus.ACCEPTED)
	@GetMapping("/{mail}")
	@JsonView(Views.Common.class)
	public Optional<Utilisateur> getByMail(@PathVariable("mail") String mail) {
		
		return utilisateurRepository.findByMail(mail);
	}
}
