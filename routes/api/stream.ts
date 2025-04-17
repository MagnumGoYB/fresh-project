import { format } from 'date-fns'
import { camelCase, snakeCase } from '@luca/cases'

export function handler(_req: Request): Response {
  let timer: number | undefined = undefined
  let counter = 1
  const encoder = new TextEncoder()
  const body = new ReadableStream({
    start(controller) {
      console.log(snakeCase('stream started'))
      timer = setInterval(() => {
        const message = `It is ${
          format(new Date(), 'pppp')
        } (${counter}) [${controller.desiredSize}]\n`
        controller.enqueue(encoder.encode(message))

        if (counter === 10) {
          controller.close()
          if (timer !== undefined) {
            clearInterval(timer)
          }
          return
        }

        counter++
      }, 500)
    },
    cancel() {
      console.log(camelCase('stream cancelled'))
      if (timer !== undefined) {
        clearInterval(timer)
      }
    },
  })

  return new Response(body, {
    headers: {
      'content-type': 'text/plain',
      'x-content-type-options': 'nosniff',
    },
  })
}
