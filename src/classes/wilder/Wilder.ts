import { v4 as uuidv4 } from 'uuid';
import { ToolController } from "./components/tool/toolController";
import { SpecialtyController } from './components/specialty/specialtyController';
import { BackgroundController } from './components/background/BackgroundController'
import { SkillsController } from './components/skill/skillController';
import type { StylesController } from './components/style/styleController';
import type { TraitsController } from './components/trait/traitController';
import type { TechniquesController } from './components/technique/techniqueController';
import type { FeastsController } from './components/feast/feastController';
import type { WilderData } from './wilderData';

export class Wilder{

private _id: string
private _name: string
private _player: string

private _dead: boolean

ToolController: ToolController
SpecialtyController: SpecialtyController
BackgroundController: BackgroundController

StylesController: StylesController
SkillsController: SkillsController
TraitsController: TraitsController
TechniquesController: TechniquesController

FeastsController: FeastsController

public constructor() {
    this._id = uuidv4()
    this._name = ""
    this._player = ""

    this._dead = false

    this.ToolController = new ToolController(this)
    this.SpecialtyController = new SpecialtyController(this)
    this.BackgroundController = new BackgroundController(this)

    this.StylesController = new StylesController(this)
    this.SkillsController = new SkillsController(this)
    this.TraitsController = new TraitsController(this)
    this.TechniquesController = new TechniquesController(this)

    this.FeastsController = new FeastsController(this)
  }

  //update both for complete and partial
public Update(data:Partial<WilderData>, hydrate?: boolean): void {
  this._id = data.id
  this._name = data.name
  this._player = data.player

    this.ToolController = ToolController.Hydrate(this, data)
    this.SpecialtyController = SpecialtyController.Hydrate(this, data)
    this.BackgroundController = BackgroundController.Hydrate(this, data)

    this.StylesController = StylesController.Hydrate(this, data)
    this.SkillsController = SkillsController.Hydrate(this, data)
    this.TraitsController = TraitsController.Hydrate(this, data)
    this.TechniquesController = TechniquesController.Hydrate(this, data)

    this.FeastsController = FeastsController.Hydrate(this, data)

  }
}