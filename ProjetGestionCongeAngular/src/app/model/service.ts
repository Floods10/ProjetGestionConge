import { Utilisateur } from './../service/utilisateur';
export class Service {
  public constructor(
    private _nom: string = '',
    private _adresse: string = '',
    private _managerPrincipal?: Utilisateur,
    private _listeEmployes?: Utilisateur[],
  ) {}


    /**
     * Getter nom
     * @return {string }
     */
	public get nom(): string  {
		return this._nom;
	}

    /**
     * Getter adresse
     * @return {string }
     */
	public get adresse(): string  {
		return this._adresse;
	}

    /**
     * Setter nom
     * @param {string } value
     */
	public set nom(value: string ) {
		this._nom = value;
	}

    /**
     * Setter adresse
     * @param {string } value
     */
	public set adresse(value: string ) {
		this._adresse = value;
	}

}
