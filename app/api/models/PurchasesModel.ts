//@ts-nocheck
import { DataType } from 'sequelize';
import { DataType, Table, Model, Column } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'purchases',
  modelName: 'PurchasesModel'
})
class FreeTrialModel extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER
  })
  declare id: string;

  @Column({
    type: DataType.STRING
  })
  declare first_name: string;

  @Column({
    type: DataType.STRING
  })
  declare last_name: string;

  @Column({
    type: DataType.STRING
  })
  declare country: string;

  @Column({
    type: DataType.STRING
  })
  declare postal_code: string;

  @Column({
    type: DataType.STRING
  })
  declare street_address: string;

  @Column({
    type: DataType.STRING
  })
  declare phone_number: string;

  @Column({
    type: DataType.STRING
  })
  declare verification_code: string;

  @Column({
    type: DataType.DATE
  })
  declare createdAt: Date;

  @Column({
    type: DataType.DATE
  })
  declare updatedAt: Date;

  @Column({
    type: DataType.STRING
  })
  declare browserip: string;

  @Column({
    type: DataType.STRING
  })
  declare minfraud_risk_score: string;
}

export { FreeTrialModel };
