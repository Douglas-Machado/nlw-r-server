import { SubmitFeedbackService } from "./submit-feedback-service"

const createFeedbackSpy = jest.fn();

const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackService(
  { create: createFeedbackSpy},
  { sendMail: sendMailSpy}
)


describe('submit feedback', () => {
  test('should be able to submit a feedback', async () => {

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64wefwegfew'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled()
  })

  it('should not be able to submit feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64wefwegfew'
    })).rejects.toThrow()
  })

  it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64wefwegfew'
    })).rejects.toThrow()
  })

  it('should not be able submit feedback if the screenshot is invalid', async () => {
    await expect(submitFeedback.execute({
      type: 'BUGt',
      comment: 'test comment',
      screenshot: 'teste.png'
    })).rejects.toThrow()
  })
})