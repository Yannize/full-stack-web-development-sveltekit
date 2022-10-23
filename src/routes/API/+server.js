// @ts-nocheck
import { json } from '@sveltejs/kit';

// TODO: Persist in database
let todos = []
 
export const GET = () => {
  console.log(todos)
  return new Response('🚀 GET from API')
}

 
export const POST = async ({ request }) => {
    const formData = await request.formData()
    const newTodo = formData.get('text')
    todos.push({
      id: todos.length,
      text: newTodo,
      createAt: new Date(),
      isDone: false
    })

    return new Response('Redirect', {
      status: 303,
      headers: {
        location: '/'
      },
    })
}