export default defineEventHandler(async (event) => {
  if (event.node.req.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method not allowed',
    })
  }

  const config = useRuntimeConfig()
  const apiUrl = config.public.apiUrl

  const body = await readBody(event)

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error('Erro no envio')
    }

    const result = await response.text()
    return { success: true, data: result }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Erro ao enviar formulário',
    })
  }
})