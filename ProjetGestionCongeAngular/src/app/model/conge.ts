import { Utilisateur } from './../service/utilisateur';
import { EnumStatutDemande } from './enum-statut-demande.enum';
import { EnumTypeConge } from './enum-type-conge.enum';
export class Conge {
  public constructor(
    private _demandeur?: Utilisateur,
    private _dateDemande?: Date,
    private _dateDebut?: Date,
    private _dateFin?: Date,
    private _duree: number = 0,
    private _typeConge: EnumTypeConge = EnumTypeConge.congesPayes,
    private _motifConge: string = 'Motif non renseigné',
    private _statutDemande: EnumStatutDemande = EnumStatutDemande.attente,
    private _commentaireSiRefuse: string = 'Motif de refus non renseigné',
  ) {}


    /**
     * Getter duree
     * @return {number }
     */
	public get duree(): number  {
		return this._duree;
	}

    /**
     * Getter typeConge
     * @return {EnumTypeConge }
     */
	public get typeConge(): EnumTypeConge  {
		return this._typeConge;
	}

    /**
     * Getter motifConge
     * @return {string }
     */
	public get motifConge(): string  {
		return this._motifConge;
	}

    /**
     * Getter statutDemande
     * @return {EnumStatutDemande }
     */
	public get statutDemande(): EnumStatutDemande  {
		return this._statutDemande;
	}

    /**
     * Getter commentaireSiRefuse
     * @return {string }
     */
	public get commentaireSiRefuse(): string  {
		return this._commentaireSiRefuse;
	}

    /**
     * Setter duree
     * @param {number } value
     */
	public set duree(value: number ) {
		this._duree = value;
	}

    /**
     * Setter typeConge
     * @param {EnumTypeConge } value
     */
	public set typeConge(value: EnumTypeConge ) {
		this._typeConge = value;
	}

    /**
     * Setter motifConge
     * @param {string } value
     */
	public set motifConge(value: string ) {
		this._motifConge = value;
	}

    /**
     * Setter statutDemande
     * @param {EnumStatutDemande } value
     */
	public set statutDemande(value: EnumStatutDemande ) {
		this._statutDemande = value;
	}

    /**
     * Setter commentaireSiRefuse
     * @param {string } value
     */
	public set commentaireSiRefuse(value: string ) {
		this._commentaireSiRefuse = value;
	}


}
