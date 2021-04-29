import { Conge } from './conge';
import { EnumRole } from './enum-role.enum';
import { Service } from './service';

export class Utilisateur {
  public constructor(
    private _nom: string = '',
    private _mail: string = '',
    private _mdp: string = '',
    private _role: EnumRole = EnumRole.ROLE_EMPLOYE,
    private _service?: Service,
    private _manager?: Utilisateur,
    private _conge?: Conge[]
  ) {}

  /**
   * Getter nom
   * @return {string }
   */
  public get nom(): string {
    return this._nom;
  }

  /**
   * Getter mail
   * @return {string }
   */
  public get mail(): string {
    return this._mail;
  }

  /**
   * Getter mdp
   * @return {string }
   */
  public get mdp(): string {
    return this._mdp;
  }

  /**
   * Getter role
   * @return {EnumRole }
   */
  public get role(): EnumRole {
    return this._role;
  }

   /**
   * Getter service
   * @return {Service }
   */
    public get service(): Service {
      return this._service;
    }
  /**
   * Getter role
   * @return {Service }
   */
  public get service(): Service {
    return this._service;
  }

  /**
   * Setter nom
   * @param {string } value
   */
  public set nom(value: string) {
    this._nom = value;
  }

  /**
   * Setter mail
   * @param {string } value
   */
  public set mail(value: string) {
    this._mail = value;
  }

  /**
   * Setter mdp
   * @param {string } value
   */
  public set mdp(value: string) {
    this._mdp = value;
  }

  /**
   * Setter role
   * @param {EnumRole } value
   */
  public set role(value: EnumRole) {
    this._role = value;
  }

  /**
   * Setter role
   * @param {Service } value
   */
  public set service(value: Service) {
    this._service = value;
  }
}
