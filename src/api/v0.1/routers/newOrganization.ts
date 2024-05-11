import { Router, Response, Request } from "express";
import OrganizationModel from "../schema/Org.schema";
import { JwtAuth } from "../middlewares/JwtAuth";

const app = Router();

app.post("/",JwtAuth, async (req: Request, res: Response) => {
  try {
    const userId = req.body.userId;

    if (!userId) {
      return res.json({
        status: "Failed",
        response: {},
        error: "Not Authenticated !",
      });
    }

    const newOrganization = await OrganizationModel.create({
      userId: userId,
      OrganizationName: req.body.OrganizationName,
      OrganizationWebsite: req.body.OrganizationWebsite,
      OrganizationPhone: req.body.OrganizationPhone,
      isActive: req.body.isActive,
    });

    res.json({
      status: "Success",
      response: {
        data: newOrganization,
      },
    });
  } catch (error) {
    console.log("Error:", error);
    res.json({
      status: "Failed",
      response: {},
      error: (error as Error).message,
    });
  }
});

app.get("/",JwtAuth, async (req: Request, res: Response) => {
  try {
    const allOrg = await OrganizationModel.find();

    res.json({
      status: "Success",
      response: {
        data: allOrg,
      },
    });
  } catch (error) {
    res.json({
      status: "Failed",
      response: {},
      error: (error as Error).message,
    });
  }
});

export default app;
