export type AccessBlockData = Record<string, never>;

export type AccessBlockType = {
  id?: string;
  type: "access";
  data: AccessBlockData;
};
