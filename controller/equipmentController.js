const Eqtype = require("./../model/dbModel/eqtypeModel");
const Equipment = require("./../model/dbModel/equipmentModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.createEqType = catchAsync(async (req, res, next) => {
  if (!req.body.eqType) {
    return next(new AppError("No eqType given", 503));
  }
  const name = req.body.eqType;
  const newEqtype = await Eqtype.create({ name });

  res.status(200).json({
    status: "sucesss",
    EquipmentType: newEqtype,
  });
});

exports.getAllEquimentTypes = catchAsync(async (req, res, next) => {
  const docs = await Eqtype.find().populate({
    path: "equipments",
    model: "Equipment",
  });

  res.status(200).json({
    status: "success",
    results: docs.length,
    data: {
      docs,
    },
  });
});
