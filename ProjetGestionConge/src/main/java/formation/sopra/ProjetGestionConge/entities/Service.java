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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((adresse == null) ? 0 : adresse.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((listeEmployes == null) ? 0 : listeEmployes.hashCode());
		result = prime * result + ((managerPrincipal == null) ? 0 : managerPrincipal.hashCode());
		result = prime * result + ((nom == null) ? 0 : nom.hashCode());
		result = prime * result + version;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Service other = (Service) obj;
		if (adresse == null) {
			if (other.adresse != null)
				return false;
		} else if (!adresse.equals(other.adresse))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (listeEmployes == null) {
			if (other.listeEmployes != null)
				return false;
		} else if (!listeEmployes.equals(other.listeEmployes))
			return false;
		if (managerPrincipal == null) {
			if (other.managerPrincipal != null)
				return false;
		} else if (!managerPrincipal.equals(other.managerPrincipal))
			return false;
		if (nom == null) {
			if (other.nom != null)
				return false;
		} else if (!nom.equals(other.nom))
			return false;
		if (version != other.version)
			return false;
		return true;
	}
	
	

}
