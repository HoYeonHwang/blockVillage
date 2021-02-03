package com.ssafy.edu.controller.user;


import com.ssafy.edu.model.block.BlockBuyRequest;
import com.ssafy.edu.model.block.BlockResponse;
import com.ssafy.edu.model.board.BoardResponse;
import com.ssafy.edu.model.user.LoginRequest;
import com.ssafy.edu.model.user.UserResponse;
import com.ssafy.edu.service.block.BlockBuyService;
import com.ssafy.edu.service.block.BlockBuyServiceImpl;
import com.ssafy.edu.service.block.BlockServiceImpl;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@ApiResponses(value = {@ApiResponse(code = 401, message = "Unauthorized", response = BoardResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BoardResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BoardResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BoardResponse.class)})

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/blocks")
public class BlockController {

    @Autowired
    private BlockBuyServiceImpl blockBuyService;

    @Autowired
    private BlockServiceImpl blockService;

    @ApiOperation(value = "블록 구입하기")
    @PostMapping("/{email}")
    public ResponseEntity<BlockResponse> buyBlock(@PathVariable("email") String email, @RequestBody BlockBuyRequest blockBuyRequest){
        return blockBuyService.buyBlock(blockBuyRequest, email);
    }

    @ApiOperation(value = "상점에서 파는 블록 목록 조회")
    @GetMapping
    public ResponseEntity<BlockResponse> getBlockList(){
        return blockService.getBlockList();
    }

    @ApiOperation(value = "내가 소유한 블록 목록 조회")
    @GetMapping("/{email}/{category}")
    public ResponseEntity<BlockResponse> getMyBlocks(@PathVariable("email") String email, @PathVariable("category") String category){
        return blockService.getMyBlockList(email, category);
    }

}
