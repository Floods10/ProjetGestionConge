package formation.sopra.ProjetGestionConge.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import formation.sopra.ProjetGestionConge.repositories.UtilisateurRepository;



@Service
public class Console implements CommandLineRunner {

	@Autowired
	private UtilisateurRepository utilisateurRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public void run(String... args) throws Exception {
		// initPasswordDataBase();
	}

	private void initPasswordDataBase() {
		utilisateurRepository.findAll().stream().forEach(utilisateur -> {
			utilisateur.setMdp(passwordEncoder.encode(utilisateur.getMail()));
			utilisateurRepository.save(utilisateur);
		});
	}

}

