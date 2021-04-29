package formation.sopra.ProjetGestionConge.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

import formation.sopra.ProjetGestionConge.restController.Views;


@Entity
@Table(name = "utilisateur")
@SequenceGenerator(name = "seqUser", sequenceName = "seq_user", initialValue = 100, allocationSize = 1)
public class Utilisateur {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seqUser")
	@JsonView(Views.Common.class)
	private Integer id;
	
	@Column(name = "nom", length = 100, unique = false, nullable = false)
	@JsonView(Views.Common.class)
	private String nom; 
	
	@Column(name = "mail", length = 100, unique = true, nullable = false)
	@JsonView(Views.Common.class)
	private String mail; 
	
	@Column(name = "mdp", length = 200, nullable = false)
	@JsonView(Views.CongeWithDemandeur.class)
	private String mdp;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "role")
	@JsonView(Views.CongeWithDemandeur.class)
	private Role role;
	
	@ManyToOne()
	@JoinColumn(name = "id_service", foreignKey = @ForeignKey (name = "utilisateur_id_service_fk"))
	@JsonView(Views.CongeWithDemandeur.class)
	private Service service;
	
	@ManyToOne()
	@JoinColumn(name = "id_manager", foreignKey = @ForeignKey (name = "utilisateur_id_manager_fk"))
	private Utilisateur manager;
	
	@OneToMany(mappedBy = "id")
	private List<Utilisateur> listeEmployes;
	
	@OneToMany(mappedBy = "demandeur")
	@JsonView(Views.CongeWithDemandeur.class)
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((conges == null) ? 0 : conges.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((mail == null) ? 0 : mail.hashCode());
		result = prime * result + ((manager == null) ? 0 : manager.hashCode());
		result = prime * result + ((mdp == null) ? 0 : mdp.hashCode());
		result = prime * result + ((nom == null) ? 0 : nom.hashCode());
		result = prime * result + ((role == null) ? 0 : role.hashCode());
		result = prime * result + ((service == null) ? 0 : service.hashCode());
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
		Utilisateur other = (Utilisateur) obj;
		if (conges == null) {
			if (other.conges != null)
				return false;
		} else if (!conges.equals(other.conges))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (mail == null) {
			if (other.mail != null)
				return false;
		} else if (!mail.equals(other.mail))
			return false;
		if (manager == null) {
			if (other.manager != null)
				return false;
		} else if (!manager.equals(other.manager))
			return false;
		if (mdp == null) {
			if (other.mdp != null)
				return false;
		} else if (!mdp.equals(other.mdp))
			return false;
		if (nom == null) {
			if (other.nom != null)
				return false;
		} else if (!nom.equals(other.nom))
			return false;
		if (role != other.role)
			return false;
		if (service == null) {
			if (other.service != null)
				return false;
		} else if (!service.equals(other.service))
			return false;
		if (version != other.version)
			return false;
		return true;
	}
	
}
