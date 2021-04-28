package formation.sopra.ProjetGestionConge.entities;

import java.time.LocalDate;

import javax.persistence.Cacheable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Version;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;


@Entity
@Table(name = "conge")
@Cacheable
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@SequenceGenerator(name = "seqConge", sequenceName = "seq_conge", initialValue = 100, allocationSize = 1)
public class Conge {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seqConge")
	private int id;
	@ManyToOne
	@JoinColumn(name = "id_utilisateur", foreignKey = @ForeignKey(name = "conge_id_utilisateur_fk"))
	private Utilisateur demandeur;
	@Column(name = "date_demande")
	private LocalDate dateDemande;
	@Column(name = "date_debut")
	private LocalDate dateDebut;
	@Column(name = "date_fin")
	private LocalDate dateFin;
	private double duree;
	private String motifConge;
	private TypeConge typeConge;
	private StatutDemande statutDemande;
	private String commentaire;
	@Version
	private Integer version;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Utilisateur getDemandeur() {
		return demandeur;
	}
	public void setDemandeur(Utilisateur demandeur) {
		this.demandeur = demandeur;
	}
	public LocalDate getDateDemande() {
		return dateDemande;
	}
	public void setDateDemande(LocalDate dateDemande) {
		this.dateDemande = dateDemande;
	}
	public LocalDate getDateDebut() {
		return dateDebut;
	}
	public void setDateDebut(LocalDate dateDebut) {
		this.dateDebut = dateDebut;
	}
	public LocalDate getDateFin() {
		return dateFin;
	}
	public void setDateFin(LocalDate dateFin) {
		this.dateFin = dateFin;
	}
	public double getDuree() {
		return duree;
	}
	public void setDuree(double duree) {
		this.duree = duree;
	}
	public String getMotifConge() {
		return motifConge;
	}
	public void setMotifConge(String motifConge) {
		this.motifConge = motifConge;
	}
	public TypeConge getTypeConge() {
		return typeConge;
	}
	public void setTypeConge(TypeConge typeConge) {
		this.typeConge = typeConge;
	}
	public StatutDemande getStatutDemande() {
		return statutDemande;
	}
	public void setStatutDemande(StatutDemande statutDemande) {
		this.statutDemande = statutDemande;
	}
	
	
	public String getCommentaire() {
		return commentaire;
	}
	public void setCommentaire(String commentaire) {
		this.commentaire = commentaire;
	}
	public Integer getVersion() {
		return version;
	}
	public void setVersion(Integer version) {
		this.version = version;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
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
		Conge other = (Conge) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
}
