import { Utilisateur } from './../model/utilisateur';
import { EnumStatutDemande } from './enum-statut-demande.enum';
import { EnumTypeConge } from './enum-type-conge.enum';
export class Conge {
  public constructor(
    private _id?: number,
    private _demandeur?: Utilisateur,
    private _dateDemande?: Date,
    private _dateDebut?: Date,
    private _dateFin?: Date,
    private _duree: number = 0,
    private _typeConge: EnumTypeConge = EnumTypeConge.congePaye,
    private _motifConge: string = 'Motif non renseigné',
    private _statutDemande: EnumStatutDemande = EnumStatutDemande.attente,
    private _commentaireSiRefuse: string = 'Motif de refus non renseigné'
  ) {}

  /**
   * Getter
   * @return {number }
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter
   * @return {Utilisateur }
   */
  public get demandeur(): Utilisateur {
    return this._demandeur;
  }

  /**
   * Setter
   * @param {Utilisateur } value
   */
  public set demandeur(value: Utilisateur) {
    this._demandeur = value;
  }

  /**
   * Getter
   * @return {Date }
   */
  public get dateDemande(): Date {
    return this._dateDemande;
  }

  /**
   * Setter
   * @param {number } value
   */
  public set id(value: number) {
    this._id = value;
  }
  /**
   * Setter
   * @param {Date } value
   */
  public set dateDemande(value: Date) {
    this._dateDemande = value;
  }

  /**
   * Getter
   * @return {Date }
   */
  public get dateDebut(): Date {
    return this._dateDebut;
  }

  /**
   * Setter
   * @param {Date } value
   */
  public set dateDebut(value: Date) {
    this._dateDebut = value;
  }

  /**
   * Getter
   * @return {Date }
   */
  public get dateFin(): Date {
    return this._dateFin;
  }

  /**
   * Setter
   * @param {Date } value
   */
  public set dateFin(value: Date) {
    this._dateFin = value;
  }

  /**
   * Getter duree
   * @return {number }
   */
  public get duree(): number {
    return this._duree;
  }

  /**
   * Getter typeConge
   * @return {EnumTypeConge }
   */
  public get typeConge(): EnumTypeConge {
    return this._typeConge;
  }

  /**
   * Getter motifConge
   * @return {string }
   */
  public get motifConge(): string {
    return this._motifConge;
  }

  /**
   * Getter statutDemande
   * @return {EnumStatutDemande }
   */
  public get statutDemande(): EnumStatutDemande {
    return this._statutDemande;
  }

  /**
   * Getter commentaireSiRefuse
   * @return {string }
   */
  public get commentaireSiRefuse(): string {
    return this._commentaireSiRefuse;
  }

  /**
   * Setter duree
   * @param {number } value
   */
  public set duree(value: number) {
    this._duree = value;
  }

  /**
   * Setter typeConge
   * @param {EnumTypeConge } value
   */
  public set typeConge(value: EnumTypeConge) {
    this._typeConge = value;
  }

  /**
   * Setter motifConge
   * @param {string } value
   */
  public set motifConge(value: string) {
    this._motifConge = value;
  }

  /**
   * Setter statutDemande
   * @param {EnumStatutDemande } value
   */
  public set statutDemande(value: EnumStatutDemande) {
    this._statutDemande = value;
  }

  /**
   * Setter commentaireSiRefuse
   * @param {string } value
   */
  public set commentaireSiRefuse(value: string) {
    this._commentaireSiRefuse = value;
  }
}
