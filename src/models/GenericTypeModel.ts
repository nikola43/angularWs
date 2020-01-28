export interface IGenericTypeModel {
  className: string;
  id: number;
  type: string;
  temporary?: number;

  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
