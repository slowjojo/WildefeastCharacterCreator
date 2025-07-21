import { v4 as uuidv4 } from 'uuid';
import { ToolController } from "./components/tool/toolController";
import { SpecialtyController } from './components/specialty/specialtyController';
import { BackgroundController } from './components/background/BackgroundController'
import { FeastsController } from './components/feast/feastController';
import type { WilderData } from './wilderData';

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