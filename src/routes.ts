import express from "express"
import { SubmitFeedbackService } from "./services/submit-feedback-service"
import { PrismaFeedbacksRepository } from "./repositories/prisma-feedbacks-repository"
import { NodeMailerMailAdapter } from "./adapters/nodemailer/nodemailser-mail-adapter"

export const router = express.Router()

router.post('/feedbacks', async (req, res) =>{
  const { type, comment, screenshot } = req.body

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailer = new NodeMailerMailAdapter()

  const submitFeedbackService = new SubmitFeedbackService(
    prismaFeedbacksRepository,
    nodemailer
  )

  await submitFeedbackService.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send()
})