const Bootcamp = require('../models/Bootcamp');

// @desc    Get all bootcamp
// @route   GET /api/v1/bootcamps
// @access  PUBLIC
const getBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).send({ status: true, data: bootcamps });
  } catch (error) {
    res.status(400).send({ status: false });
  }
};

// @desc    Get all bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  PUBLIC
const getBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).send({ status: false });
    }

    res.status(200).send({ status: true, data: bootcamp });
  } catch (error) {
    res.status(400).send({ status: false });
  }
};

// @desc    Create bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  PUBLIC
const createBootcamps = async (req, res) => {
  try {
    const data = req.body;
    const bootcamp = await Bootcamp.create(data);
    res.status(200).send({ status: true, data: bootcamp });
  } catch (error) {
    res.status(400).send({ status: false });
  }
};

// @desc    update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  PUBLIC
const updateBootcamps = async (req, res) => {
  try {
    const updateBootcamps = await Bootcamp.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updateBootcamps) {
      return res.status(400).send({ status: false });
    }
    res.status(200).send({ status: true, data: updateBootcamps });
  } catch (error) {
    res.status(400).send({ status: false });
  }
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  PUBLIC
const deleteBootcamps = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(400).send({ status: false });
    }

    res.status(200).send({ status: true, data: bootcamp });
  } catch (error) {
    res.status(400).send({ status: false });
  }
};

module.exports = {
  getBootcamps,
  getBootcamp,
  createBootcamps,
  updateBootcamps,
  deleteBootcamps,
};
