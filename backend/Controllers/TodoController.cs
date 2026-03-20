using System;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class TodoController : ControllerBase
{
	private static List<Todo> _todos = new();

	[HttpGet]
	public IActionResult GetAll()
	{
		return Ok(_todos);
	}

	[HttpGet("{id}")]
	public IActionResult GetById(int id)
	{
		var todo = _todos.FirstOrDefault(x => x.Id == id);
		if (todo == null) return NotFound();
		return Ok(todo);
	}

	[HttpPost]
	public IActionResult Create([FromBody] Todo todo)
	{
		todo.Id = _todos.Count + 1;
		_todos.Add(todo);
		return Created("", todo);
	}

	[HttpPut("{id}")]
	public IActionResult Update(int id, [FromBody] Todo todo)
	{
		var existing = _todos.FirstOrDefault(x => x.Id == id);
		if (existing == null)
		{
			return NotFound();
		}
		existing.Title = todo.Title;
		existing.IsFinished = todo.IsFinished;
		return Ok(existing);
	}

	[HttpDelete("{id}")]
	public IActionResult Delete(int id)
	{
		var todo = _todos.FirstOrDefault(x => x.Id == id);
		if (todo == null) return NotFound();
		_todos.Remove(todo);
		return NoContent();

	}
}
