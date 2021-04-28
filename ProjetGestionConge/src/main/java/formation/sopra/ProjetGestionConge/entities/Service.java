package formation.sopra.ProjetGestionConge.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Version;

@Entity
@Table(name = "service")
@SequenceGenerator(name = "seqService", sequenceName = "seq_service", initialValue = 100, allocationSize = 1)
public class Service {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seqService")
	private Integer id;
	
	@Column(name = "nom", length = 100, unique = false, nullable = false)
	private String nom;
	
	@Column(name = "adresse", length = 200, unique = true, nullable = true)
	private String adresse;
	
	@Column(name = "managerPrincipal", length = 20, unique = false, nullable = false)
	private Utilisateur managerPrincipal;
	
	@OneToMany(mappedBy = "mail")
	private List<Utilisateur> listeEmployes;
	
	@Version
	private int version;

	public Service() {}

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

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public Utilisateur getManagerPrincipal() {
		return managerPrincipal;
	}

	public void setManagerPrincipal(Utilisateur managerPrincipal) {
		this.managerPrincipal = managerPrincipal;
	}

	public List<Utilisateur> getListeEmployes() {
		return listeEmployes;
	}

	public void setListeEmployes(List<Utilisateur> listeEmployes) {
		this.listeEmployes = listeEmployes;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

}
