import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

const handler = (_: GatsbyFunctionRequest, res: GatsbyFunctionResponse) => {
    res.status(200).json({ hello: `world` })
  }

export default handler