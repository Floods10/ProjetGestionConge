package formation.sopra.ProjetGestionConge.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import formation.sopra.ProjetGestionConge.repositories.UtilisateurRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {
	

	@ResponseStatus(HttpStatus.ACCEPTED)
	@GetMapping("/login")
	public void login() {
		
	}
	
	
}
