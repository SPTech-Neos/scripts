package school.sptech.neosspringjava.api.controllers.serviceCategoryController;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;
import school.sptech.neosspringjava.api.dtos.serviceCategoryDto.ServiceCategoryRequest;
import school.sptech.neosspringjava.api.dtos.serviceCategoryDto.ServiceCategoryResponse;
import school.sptech.neosspringjava.service.serviceCategoryService.ServiceCategoryService;

@RestController
@RequestMapping("/serviceCategory")
@RequiredArgsConstructor
public class ServiceCategoryController {
    private final ServiceCategoryService servCategoryServ;


    @GetMapping
    public ResponseEntity<List<ServiceCategoryResponse>> listServiceCategory (){
       return ResponseEntity.ok().body(servCategoryServ.findAll());
    }
    
    @PostMapping
    public ResponseEntity<ServiceCategoryResponse>  createServiceCategory (@RequestBody ServiceCategoryRequest serviceCategoryRequest){
       return ResponseEntity.ok().body(servCategoryServ.save(serviceCategoryRequest));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ServiceCategoryResponse> updateServiceCategory (@PathVariable Integer id, @RequestBody ServiceCategoryRequest serviceCategoryRequest){
        return  ResponseEntity.ok().body(servCategoryServ.update(serviceCategoryRequest, id));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceCategoryResponse> getServiceCategoryById(@PathVariable Integer id){
       return ResponseEntity.ok().body(servCategoryServ.findById(id));
        
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteServiceCategory (@PathVariable Integer id){
        return ResponseEntity.ok().body(servCategoryServ.deleteByid(id));
    }
}
