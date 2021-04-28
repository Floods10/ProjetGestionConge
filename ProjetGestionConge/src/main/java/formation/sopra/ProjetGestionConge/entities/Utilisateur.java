package formation.sopra.ProjetGestionConge.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Version;

@Entity
@Table(name = "utilisateur")
@SequenceGenerator(name = "seqUser", sequenceName = "seq_user", initialValue = 100, allocationSize = 1)
public class Utilisateur {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seqUser")
	private Integer id;
	
	@Column(name = "nom", length = 100, unique = false, nullable = false)
	private String nom; 
	
	@Column(name = "mail", length = 100, unique = true, nullable = false)
	private String mail; 
	
	@Column(name = "mdp", length = 200, nullable = false)
	private String mdp;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "role")
	private Role role;
	
	@Column(name = "service")
	private Service service;
	
	@Column(name = "manager")
	private Utilisateur manager;
	
	@OneToMany(mappedBy = "demandeur")
	private List<Conge> conges;
	
	@Version
	private int version;

	public Utilisateur() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getMdp() {
		return mdp;
	}

	public void setMdp(String mdp) {
		this.mdp = mdp;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public Service getService() {
		return service;
	}

	public void setService(Service service) {
		this.service = service;
	}

	public Utilisateur getManager() {
		return manager;
	}

	public void setManager(Utilisateur manager) {
		this.manager = manager;
	}

	public List<Conge> getConges() {
		return conges;
	}

	public void setConges(List<Conge> conges) {
		this.conges = conges;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}
	
}
