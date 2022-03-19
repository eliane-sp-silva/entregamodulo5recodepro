package silva.eliane.apidreams.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import silva.eliane.apidreams.entities.Produto;
import silva.eliane.apidreams.repositories.ProdutoRepository;

@Service
public class ProdutoService {
	@Autowired
	private ProdutoRepository repository;
	
	@Transactional(readOnly = true)
	public List<Produto> findAll() {
		List<Produto> resultado = repository.findAll();
		return resultado;
	}
	
	@Transactional(readOnly = true)
	public Produto findById(Long id) {
		Optional<Produto> produto = repository.findById(id);
		return produto.get() ;
	}
	
	@Transactional(readOnly = true)
	public void save (Produto produto) {
		repository.save(produto);
	}
	
	public void delete(Long id) {
		Optional<Produto> produto = repository.findById(id);
		if (produto.isPresent()) {
			repository.delete(produto.get());
		} else {
			System.out.println("Produto não existe");
		}
	}
	
	public Produto update(Produto produto) {
		return repository.save(produto);
	}
}
