import { DataType, Table, Model, Column } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "payments_declined",
  modelName: "PaymentsDeclinedModel",
})

class PaymentsDeclinedModel extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER
  })
  declare id: number;

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
  declare email: string;

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

  @Column({
    type: DataType.STRING
  })
  declare minfraud_risk_insights: string;

  @Column({
    type: DataType.STRING
  })
  declare minfraud_risk_factors: string;

  @Column({
    type: DataType.STRING
  })
  declare nmi_response_code: string;

  @Column({
    type: DataType.STRING
  })
  declare nmi_response_text: string;

  @Column({
    type: DataType.STRING
  })
  declare nmi_avs_response: string;

  @Column({
    type: DataType.STRING
  })
  declare nmi_cvv_response: string;

  @Column({
    type: DataType.STRING
  })
  declare nmi_result_code: string;

  @Column({
    type: DataType.STRING
  })
  declare purchase_amount: string;

}

export { PaymentsDeclinedModel };