import { v4 as uuidv4 } from 'uuid'
import { ToolController } from "./components/tool/ToolController"
import { SpecialtyController } from './components/specialty/specialtyController'
import { BackgroundController } from './components/background/BackgroundController'
import { FeastsController } from './components/feast/feastController'
import type { WilderData } from './wilderData'

export interface IWilder {
  readonly id: string;
  readonly name: string;
  readonly player: string;
  readonly dead: boolean;
  readonly ToolController: ToolController;
  readonly SpecialtyController: SpecialtyController;
  readonly BackgroundController: BackgroundController;
  readonly FeastsController: FeastsController;
  Update(data: WilderData): void;
}


export class Wilder{

private _id: string
private _name: string
private _player: string

private _dead: boolean

public readonly ToolController: ToolController
public readonly SpecialtyController: SpecialtyController
public readonly BackgroundController: BackgroundController
public readonly FeastsController: FeastsController

public constructor() {
    this._id = uuidv4()
    this._name = ""
    this._player = ""

    this._dead = false

    this.ToolController = new ToolController(this)
    this.SpecialtyController = new SpecialtyController(this)
    this.BackgroundController = new BackgroundController(this)


    this.FeastsController = new FeastsController(this)
  }
    public get id(): string {
    return this._id
  }

  public get name(): string {
    return this._name
  }

  public get player(): string {
    return this._player
  }

  public get dead(): boolean {
    return this._dead
  }



 public Update(data: WilderData): void {

        this._id = data.id
        this._name = data.name
        this._player = data.player
        this._dead = data.dead

        
        this.ToolController.Hydrate(data.tool)
        this.SpecialtyController.Hydrate(data.specialty)
        this.BackgroundController.Hydrate(data.background)
        this.FeastsController.Hydrate(data.feasts  || [])
    }
}