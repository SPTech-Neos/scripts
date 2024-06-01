package school.sptech.neosspringjava.api.controllers.filterController;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import school.sptech.neosspringjava.api.dtos.FilterDto.FilterRequest;
import school.sptech.neosspringjava.api.dtos.FilterDto.FilterResponse;
import school.sptech.neosspringjava.api.mappers.filterMapper.FilterMapper;
import school.sptech.neosspringjava.domain.model.filter.Filter;
import school.sptech.neosspringjava.domain.repository.establishmentRepository.EstablishmentRepository;
import school.sptech.neosspringjava.domain.repository.filterRepository.FilterRepository;
import school.sptech.neosspringjava.domain.repository.serviceRepository.ServiceRepository;

@RestController
@RequestMapping("/filter")
@RequiredArgsConstructor
public class FilterController {

    private final FilterMapper filterMapper;
    private final FilterRepository filterRepository;
    private final EstablishmentRepository establishmentRopository;
    private final ServiceRepository serviceRepository;

    @GetMapping
    public ResponseEntity<List<FilterResponse>> findAll() {
        return ResponseEntity.ok(filterMapper.toFilterResponse(filterRepository.findAll()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<FilterResponse> findById(@RequestParam Integer id) {
        return ResponseEntity.ok(filterMapper.toFilterResponse(filterRepository.findById(id).get()));
    }

    @PostMapping
    public ResponseEntity<FilterResponse> save(@RequestBody FilterRequest filterRequest) {
        Filter filter = Filter.builder()
                .price(filterRequest.price())
                .establishment(establishmentRopository.findById(filterRequest.fkEstablishment()).get())
                .service(serviceRepository.findById(filterRequest.fkService()).get())
                .build();
        return ResponseEntity.ok(filterMapper.toFilterResponse(filterRepository.save(filter)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<FilterResponse> update(@RequestParam Integer id, @RequestBody FilterRequest filterRequest) {
        Filter filter = Filter.builder()
                .id(id)
                .price(filterRequest.price())
                .establishment(establishmentRopository.findById(filterRequest.fkEstablishment()).get())
                .service(serviceRepository.findById(filterRequest.fkService()).get())
                .build();
        return ResponseEntity.ok(filterMapper.toFilterResponse(filterRepository.save(filter)));
    }
    
 

    @DeleteMapping("/{id}")
    public void deleteFilter(@RequestParam Integer id) {
        filterRepository.deleteById(id);
    }
}
