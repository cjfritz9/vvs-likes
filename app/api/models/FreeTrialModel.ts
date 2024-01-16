import { DataType, Table, Model, Column } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "free_trials",
  modelName: "TrialModel",
})
class FreeTrialModel extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare igu: string;

  @Column({
    type: DataType.STRING,
  })
  declare browserip: string;

  @Column({
    type: DataType.STRING,
  })
  declare post_id: string;

  @Column({
    type: DataType.STRING,
  })
  declare country: string;

  @Column({
    type: DataType.STRING,
  })
  declare timezone: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare form_code: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  declare email_confirmation: boolean;

  @Column({
    type: DataType.STRING,
  })
  declare verification_code: string;

  @Column({
    type: DataType.DATE
  })
  declare createdAt: Date;

  @Column({
    type: DataType.DATE,
  })
  declare updatedAt: Date;
}

export { FreeTrialModel };
