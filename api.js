/**
 * Handle the root route
 * @param {object} req
 * @param {object} res
*/
function handleRoot(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  }
  
  /**
   * List all products
   * @param {object} req
   * @param {object} res
   */
  async function listProducts(req, res) {
    const productsFile = path.join(__dirname, 'data/full-products.json')
    try {
      const data = await fs.readFile(productsFile)
      res.json(JSON.parse(data))
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }