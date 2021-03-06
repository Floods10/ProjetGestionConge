package formation.sopra.ProjetGestionConge.security;



import java.util.ArrayList;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import formation.sopra.ProjetGestionConge.entities.Utilisateur;



public class CustomUserDetails implements UserDetails {

	private Utilisateur utilisateur;

	public CustomUserDetails(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Collection<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		utilisateur.getRoles().stream().forEach(rl -> {
			authorities.add(new SimpleGrantedAuthority(rl.getRole().toString()));
		});
		return authorities;
	}

	@Override
	public String getPassword() {
		return utilisateur.getPassword();
	}

	@Override
	public String getUsername() {
		return utilisateur.getUtilisateur();
	}

	@Override
	public boolean isAccountNonExpired() {
		// je ne traite pas cette fonction=>je renvoie true pour ne pas etre bloque
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return utilisateur.isEnable();
	}

}
