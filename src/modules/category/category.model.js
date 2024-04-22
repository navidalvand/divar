const { Schema, Types, model } = require("mongoose");

const CategoryScheama = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, index: true },
    icon: { type: String, required: true },
    parent: { type: Types.ObjectId, ref: "Category" },
    parents: { type: [Types.ObjectId], ref: "Category", default: [] },
  },
  {
    toJSON: { virtuals: true },
    versionKey: false,
    id: false,
  }
);

CategoryScheama.virtual("children", {
  ref: "Category",
  localField: "_id",
  foreignField: "parent",
});

export const CategoryModel = new model("category", CategoryScheama);
