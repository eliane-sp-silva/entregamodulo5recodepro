package silva.eliane.apidreams.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import silva.eliane.apidreams.entities.Produto;
import silva.eliane.apidreams.services.ProdutoService;

@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "http://localhost:3000")
public class ProdutoResource {
	
	@Autowired
	private ProdutoService service;

	@GetMapping
	public List<Produto> findAll() {
		return service.findAll();
	}
	
	@PostMapping
	public ResponseEntity<Produto> save(@RequestBody Produto produto){
		service.save(produto); 
		return ResponseEntity.ok().body(produto);
	}
	

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Produto> delete(@PathVariable Long id) {
		Produto produto = service.findById(id);
		service.delete(id);	
		return ResponseEntity.ok().body(produto);
	}
	
	@PutMapping(value = "/update")
	public ResponseEntity<Produto> update(@RequestBody Produto produto) {
		produto = service.update(produto);
		return ResponseEntity.ok().body(produto);
	}
}
