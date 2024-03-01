// @desc    Get all bootcamp
// @route   GET /api/v1/bootcamps
// @access  PUBLIC
const getBootcamps = (req, res) => {
  res.status(200).send({ status: true, msg: `Show bootcamps` });
};

// @desc    Get all bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  PUBLIC
const getBootcamp = (req, res) => {
  res.status(200).send({ status: true, msg: `Show bootcamp` });
};

// @desc    Create bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  PUBLIC
const createBootcamps = (req, res) => {
  res.status(200).send({ status: true, msg: `Create bootcamp` });
};

// @desc    update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  PUBLIC
const updateBootcamps = (req, res) => {
  res
    .status(200)
    .send({ status: true, msg: `Update bootcamps ${req.params.id}` });
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  PUBLIC
const deleteBootcamps = (req, res) => {
  res
    .status(200)
    .send({ status: true, msg: `Delete bootcamps ${req.params.id}` });
};

module.exports = {
  getBootcamps,
  getBootcamp,
  createBootcamps,
  updateBootcamps,
  deleteBootcamps,
};
